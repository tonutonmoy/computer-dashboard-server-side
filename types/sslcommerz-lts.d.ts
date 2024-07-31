declare module 'sslcommerz-lts' {
    interface SSLCommerzInitOptions {
      store_id: string;
      store_passwd: string;
      total_amount: number;
      currency: string;
      tran_id: string;
      success_url: string;
      fail_url: string;
      cancel_url: string;
      ipn_url?: string;
      shipping_method?: string;
      product_name: string;
      product_category: string;
      product_profile: string;
      cus_name: string;
      cus_email: string;
      cus_add1: string;
      cus_add2?: string;
      cus_city: string;
      cus_state?: string;
      cus_postcode: string;
      cus_country: string;
      cus_phone: string;
      cus_fax?: string;
      ship_name?: string;
      ship_add1?: string;
      ship_add2?: string;
      ship_city?: string;
      ship_state?: string;
      ship_postcode?: string;
      ship_country?: string;
    }
  
    interface SSLCommerzResponse {
      status: string;
      failedreason?: string;
      sessionkey?: string;
      gw: {
        visa: string;
        master: string;
        amex: string;
        othercards: string;
        internetbanking: string;
        mobilebanking: string;
      };
      redirectGatewayURL: string;
      directPaymentURLBank: string;
      directPaymentURLCard: string;
      directPaymentURL: string;
      redirectGatewayURLFailed: string;
      GatewayPageURL: string;
      storeBanner: string;
      storeLogo: string;
      store_name: string;
      desc: any[];
    }
  
    class SSLCommerz {
      constructor(store_id: string, store_passwd: string, is_live: boolean);
      init(options: SSLCommerzInitOptions): Promise<SSLCommerzResponse>;
    }
  
    export = SSLCommerz;
  }
  