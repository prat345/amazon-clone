import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("123"),
      isAdmin: true,
    },
    {
      name: "Kopkap",
      email: "kopkap@example.com",
      password: bcrypt.hashSync("123"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nike Slim shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // 679px × 829px
      price: 134.99,
      countInStock: 10,
      brand: "Nike",
      rating: 3.7,
      numReviews: 227,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
    {
      // _id: "2",
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 132.99,
      countInStock: 3,
      brand: "Adidas",
      rating: 2.9,
      numReviews: 31,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
    {
      // _id: "3",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 24.75,
      countInStock: 12,
      brand: "Nike",
      rating: 4.7,
      numReviews: 141,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
    {
      // _id: "4",
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 22.75,
      countInStock: 5,
      brand: "Puma",
      rating: 3.9,
      numReviews: 25,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
    {
      // _id: "5",
      name: "Women's Polo Shirts",
      slug: "women-polo-shirts",
      category: "Shirts",
      image: "/images/p5.jpg",
      price: 130.98,
      countInStock: 7,
      brand: "Puma",
      rating: 4.4,
      numReviews: 281,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
    {
      // _id: "6",
      name: "Women's Golf Pants",
      slug: "women-golf-pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 20.75,
      countInStock: 5,
      brand: "Puma",
      rating: 4.3,
      numReviews: 110,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque diam orci, suscipit mattis lacinia a, fermentum nec dolor. Aliquam id aliquet turpis. ",
    },
  ],
};

export default data;
