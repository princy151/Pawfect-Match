import React, { useState } from "react";
import SNavbar from "../../assets/common/snavbar";
import ShopECard from "../../assets/common/shopeditcard";

interface Product {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  isOffer: boolean;
  offerPercentage?: number;
}

const initialProducts: Product[] = [
  {
    name: "Leash",
    description: "Durable leash",
    price: "Rs.320",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    isOffer: true,
    offerPercentage: 20,
  },
  {
    name: "Pumpkin Toy",
    description: "Soft toy",
    price: "Rs.240",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    isOffer: true,
    offerPercentage: 15,
  },
  {
    name: "Treats",
    description: "Tasty snacks",
    price: "Rs.320",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    isOffer: true,
    offerPercentage: 10,
  },
  {
    name: "Clipper",
    description: "Nail clipper",
    price: "Rs.180",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
    isOffer: false,
  },
];

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([...initialProducts, ...initialProducts]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    isOffer: false,
    offerPercentage: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "offerPercentage"
          ? Number(value)
          : value,
    }));
  };

  const handleEdit = (product: Product) => {
    setFormData({
      ...product,
      offerPercentage: product.offerPercentage || 0,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRemove = (index: number) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert("Please enter a product name");
      return;
    }
    if (!formData.price.trim()) {
      alert("Please enter a price");
      return;
    }
    const existingIndex = products.findIndex(p => p.name === formData.name);
    let updatedProducts = [...products];

    const newProduct: Product = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      imageUrl: formData.imageUrl || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
      isOffer: formData.isOffer,
      offerPercentage: formData.isOffer ? formData.offerPercentage : 0,
    };

    if (existingIndex >= 0) {
      updatedProducts[existingIndex] = newProduct;
    } else {
      updatedProducts.push(newProduct);
    }

    setProducts(updatedProducts);

    setFormData({
      name: "",
      description: "",
      price: "",
      imageUrl: "",
      isOffer: false,
      offerPercentage: 0,
    });
  };

  return (
    <div className="relative font-serif bg-white min-h-screen">
      <SNavbar />
      <div
        className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none"
      />

      {/* Back arrow */}
      <div className="text-2xl mb-4 ml-8">←</div>

      {/* Product Form with ShelterHomePage style */}
      <div className="rounded-4xl p-6 max-w-4xl mx-auto mb-20 bg-[#FFFDFB] border border-[#A7522A] drop-shadow-md">
        <h2 className="text-xl font-semibold mb-4">Item details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full border p-2 rounded"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full border p-2 rounded h-24"
            />
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center border border-gray-300 rounded bg-gray-50 text-gray-500 text-sm">
              Add Photo
            </div>
            <div className="flex gap-3 items-center">
              <input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="w-full border p-2 rounded"
              />
              <input
                name="isOffer"
                type="checkbox"
                checked={formData.isOffer}
                onChange={handleInputChange}
                className="w-5 h-5 mt-2"
              />
              <label className="mt-2 text-sm">Offer</label>

              {formData.isOffer && (
                <input
                  name="offerPercentage"
                  type="number"
                  min={0}
                  max={100}
                  value={formData.offerPercentage}
                  onChange={handleInputChange}
                  placeholder="Offer %"
                  className="w-24 border p-2 rounded ml-4"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-[#A7522A] text-white px-6 py-2 rounded-full hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg"
          >
            Add/Update
          </button>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 ml-10 font-[Abhaya_Libre]">Offer Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-10 mb-10">
          {products.filter(p => p.isOffer).map((product, i) => (
            <ShopECard
              key={i}
              imageUrl={product.imageUrl}
              price={product.price}
              discount={product.offerPercentage ? `-${product.offerPercentage}%` : ""}
              onEdit={() => handleEdit(product)}
              onDelete={() => handleRemove(i)}
            />
          ))}
        </div>

        <h2 className="text-4xl font-semibold mb-4 ml-10 font-[Abhaya_Libre]">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-10 mb-20">
          {products.filter(p => !p.isOffer).map((product, i) => (
            <ShopECard
              key={i}
              imageUrl={product.imageUrl}
              price={product.price}
              discount={""}
              onEdit={() => handleEdit(product)}
              onDelete={() => handleRemove(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
