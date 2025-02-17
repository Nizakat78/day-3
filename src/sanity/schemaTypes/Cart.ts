export default {
  name: "cart",
  type: "document",
  title: "Cart",
  fields: [
    {
      name: "userId",
      type: "string",
      title: "User ID",
    },
    {
      name: "items",
      type: "array",
      title: "Cart Items",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", type: "string", title: "Product ID" }, // Changed from __id to productId
            { name: "name", type: "string", title: "Product Name" },
            { name: "price", type: "number", title: "Price" },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "image", type: "string", title: "Image URL" },
          ],
        },
      ],
    },
  ],
};
