import { SinonStubbedInstance, createStubInstance } from 'sinon';
import { ProductsService } from './products.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces';

fdescribe('ProductsService', () => {

  let http: SinonStubbedInstance<HttpClient>;
  let service: ProductsService;
  let url: string;
  let mockResponse: Products;

  beforeEach(() => {
    http = createStubInstance(HttpClient);
    service = new ProductsService(http as any);
  });

  describe('GetProductsList()', () => {
    beforeEach(() => {
      url = '../../../assets/json/laptops.json';
      mockResponse = [
        {
          id: 1,
          name: 'Macbook Pro',
          model: 'Macbook Pro 2018 Intel®',
          price: 15000,
          dateOfPurchase: '12/02/2019',
          description: 'text'
        }
      ];
      http.get.returns(of(mockResponse));
    });

    it('should have http.get been called with url', () => {
      service.getProductsList();
      expect(http.get.calledOnceWithExactly(url)).toEqual(true)
    });
    it('should return the list of products', (done) => {
      const expected = [
        {
          id: 1,
          name: 'Macbook Pro',
          model: 'Macbook Pro 2018 Intel®',
          price: 15000,
          dateOfPurchase: '12/02/2019',
          description: 'text'
        }
      ];
      service.getProductsList().subscribe(items => {
        expect(items).toEqual(expected);
        done();
      });
    });
  });

});
