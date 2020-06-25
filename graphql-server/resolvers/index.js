const { 
  registerCustomer, 
  fetchCustomers, 
  login, 
  fetchCustomerById 
} = require('../customers');
const { addProduct, fetchProductById, fetchProducts } = require('../product');
const { 
  fetchOrderProducts,
  addOrderProduct, 
  fetchOrderProductById,
  addOrder,
  fetchOrders,
} = require('../order');

const resolvers = {
  Query: {
    customers: () => {
      const customers = fetchCustomers();
      return customers;
    },
    customer: (root, args) => {
      const customer = fetchCustomerById(args.id);
      return customer;
    },
    product: (parent, args) => {
      const product = fetchProductById(args.id);
      return product;
    },
    products: () => {
      const products = fetchProducts();
      return products;
    },
    orderProduct: () => {
      const orderProducts = fetchOrderProducts();
      return orderProducts;
    },
    orderProductById: (root, args) => {
      const orderProduct = fetchOrderProductById(args.id);
      return orderProduct;
    },
    orders: async () => {
      const orders = await fetchOrders();
      return orders.map(order => {
        let totalOrderValue = 0;
        order.products.forEach(a => totalOrderValue + (a.quantity * a.price));
        return {
          ...order,
          totalOrderValue: totalOrderValue
        };
      });
    }
  },
  Mutation: {
    login: async (parent, args) => {
      const token = await login(args.customer);
      return token;
    },
    registerCustomer: async (parent, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
    addProduct: async (parent, args) => {
      const user = await addProduct(args.product);
      return user;
    },
    addOrderProduct: async (root, args) => {
      const orderProduct = await addOrderProduct(args.orderProduct);
      return orderProduct;
    },
    addOrder: async (root, args) => {
      const order = await addOrder(args.order);
      return order;
    },
  },
  OrderProduct: {
    product: async (obj) => {
      const product = await fetchProductById(obj.productId);
      return product;
    },
  },
  Order: {
    customer: async (obj) => {
      const customer  = await fetchCustomerById(obj.customerId);
      return customer;
    }
  }
};

module.exports = resolvers;
