const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    customers: [Customer]
    products: [Product]
    product(id: ID!): Product
    customer(id: ID!): Customer
    orders: [Order]
    orderProduct: [OrderProduct]
    orderProductById(id: ID!): OrderProduct
  }

  type Mutation {
    login(customer: LoginInput): String
    registerCustomer(customer: CustomerInput): Customer,
    addProduct(product: ProductInput): Product,
    addOrderProduct(orderProduct: InputOrderProduct): OrderProduct,
    addOrder(order: OrderInput): Order
  }

  input LoginInput {
    email: String
    password: String
  }

  input CustomerInput {
    name: String
    email: String
    password: String
    address: String
  }

  type Customer {
    id: ID
    name: String
    email: String
    address: String
  }

  input ProductInput {
    name: String
    price: Float!
    category: String
  }

  type Order {
    id: ID!
    customer: Customer
    totalOrderValue: Float
    shippingAddress: String
    paymentMethod: String
    products: [OrderProduct]
  }

  type OrderProduct {
    id: ID
    product: Product
    quantity: Int
    price: Float
  }

  type Product {
    id: ID!
    name: String
    category: String
    price: Float!
  }

  input OrderInput {
    customerId: String
    shippingAddress: String
    paymentMethod: String
    products: [InputOrderProduct]
  }

  input InputOrderProduct {
    productId: String,
    quantity: Int
    price: Float
  }
`;

module.exports = typeDefs;
