import React, { useEffect, useState } from "react";
import axios from "axios";
import SNavbar from "../../assets/common/snavbar";
import ShopECard from "../../assets/common/shopeditcard";

interface Product {
  _id?: string;
  name: string;
  description: string;
  price: string;
  discount?: string;
  image: string;
  isFeatured?: boolean;
}

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    isFeatured: false,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState<{ show: boolean; id: string | null }>({
    show: false,
    id: null,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/shop");
      setProducts(res.data.data);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("discount", formData.discount ? `-${formData.discount}%` : "0%");
      data.append("isFeatured", String(formData.isFeatured));
      if (imageFile) data.append("image", imageFile);

      if (editingProductId) {
        await axios.put(`http://localhost:3000/api/v1/shop/${editingProductId}`, data);
        showToast("Product updated!");
      } else {
        await axios.post("http://localhost:3000/api/v1/shop", data);
        showToast("Product added!");
      }

      setFormData({
        name: "",
        description: "",
        price: "",
        discount: "",
        isFeatured: false,
      });
      setImageFile(null);
      setEditingProductId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error saving product", err);
    }
  };

  const confirmDelete = (id: string) => {
    setShowConfirm({ show: true, id });
  };

  const handleRemoveConfirmed = async () => {
    if (!showConfirm.id) return;
    try {
      await axios.delete(`http://localhost:3000/api/v1/shop/${showConfirm.id}`);
      fetchProducts();
      showToast("Product deleted!");
      setShowConfirm({ show: false, id: null });
    } catch (err) {
      console.error("Error deleting product", err);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProductId(product._id || null);
    setFormData({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      discount: product.discount?.replace("-", "").replace("%", "") || "",
      isFeatured: product.isFeatured || false,
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative font-serif bg-white min-h-screen">
      <SNavbar />
      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/images/emptybg.png')] bg-repeat opacity-10 pointer-events-none" />

      <div className="text-2xl mb-4 ml-8">←</div>

      <div className="rounded-4xl p-6 max-w-4xl mx-auto mb-20 bg-[#FFFDFB] border border-[#A7522A] drop-shadow-md">
        <h2 className="text-xl font-semibold mb-4">Item details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" className="w-full border p-2 rounded" />
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full border p-2 rounded h-24" />
            <input name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" className="w-full border p-2 rounded" />
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            <input type="file" onChange={handleImageChange} className="w-full border p-2 rounded" accept="image/*" />
            <div className="flex gap-3 items-center">
              <input name="discount" value={formData.discount} onChange={handleInputChange} placeholder="Discount %" className="w-24 border p-2 rounded" />
              <input name="isFeatured" type="checkbox" checked={formData.isFeatured} onChange={handleInputChange} className="w-5 h-5" />
              <label className="text-sm">Featured</label>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <button onClick={handleSubmit} className="bg-[#A7522A] text-white px-6 py-2 rounded-full hover:bg-[#E7DAD1] hover:text-black transition drop-shadow-lg">
            {editingProductId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 ml-10 font-[Abhaya_Libre]">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-10 mb-10">
          {products.filter(p => p.isFeatured).map((product) => (
            <div className="relative" key={product._id}>
              <button onClick={() => confirmDelete(product._id!)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✕</button>
              <button onClick={() => handleEdit(product)} className="absolute -top-2 left-2 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✎</button>
              <ShopECard
                imageUrl={product.image}
                price={`Rs.${product.price}`}
                discount={product.discount || ""}
                description={product.description || ""}
                onEdit={() => handleEdit(product)}
                onDelete={() => confirmDelete(product._id!)}
              />
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-semibold mb-4 ml-10 font-[Abhaya_Libre]">More Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center px-10 mb-20">
          {products.filter(p => !p.isFeatured).map((product) => (
            <div className="relative" key={product._id}>
              <button onClick={() => confirmDelete(product._id!)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✕</button>
              <button onClick={() => handleEdit(product)} className="absolute -top-2 left-2 bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs z-10">✎</button>
              <ShopECard
                imageUrl={product.image}
                price={`Rs.${product.price}`}
                discount={product.discount || ""}
                description={product.description || ""}
                onEdit={() => handleEdit(product)}
                onDelete={() => confirmDelete(product._id!)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-[90%] max-w-md text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Are you sure you want to delete this product?</h3>
            <div className="flex justify-center space-x-4">
              <button onClick={handleRemoveConfirmed} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700">Yes, Delete</button>
              <button onClick={() => setShowConfirm({ show: false, id: null })} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#A7522A] text-white px-8 py-4 rounded-full shadow-xl text-lg font-semibold z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
