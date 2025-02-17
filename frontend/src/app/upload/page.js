'use client';
import { useState } from 'react';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function UploadForm() {
  const [form, setForm] = useState({ description: '', size: '', price: '', place: '' });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append('image', image);

    try {
      const res = await fetch('http://localhost:5000/product/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload failed');
      
      setMessage('Product uploaded successfully!');
      setForm({ description: '', size: '', price: '', place: '' });
      setImage(null);
    } catch (err) {
      setMessage(err.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex  items-center  p-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload New Product</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Image
              </label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                accept="image/*"
                required
              />
            </div>

            <TextField
              name="description"
              value={form.description}
              onChange={(e) => setForm({...form, description: e.target.value})}
              placeholder="Description"
            />

            <div className="grid grid-cols-2 gap-4">
              <TextField
                name="size"
                value={form.size}
                onChange={(e) => setForm({...form, size: e.target.value})}
                placeholder="Size (sq ft)"
              />
              <TextField
                type="number"
                name="price"
                value={form.price}
                onChange={(e) => setForm({...form, price: e.target.value})}
                placeholder="Price ($)"
              />
            </div>

            <TextField
              name="place"
              value={form.place}
              onChange={(e) => setForm({...form, place: e.target.value})}
              placeholder="Place"
            />

            <Button
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium"
              disabled={loading}
            >
              {loading ? 'Uploading...' : 'Upload Product'}
            </Button>

            {message && (
              <p className={`mt-4 text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
            <Link href='/' className='flex justify-center text-blue-600 underline hover:text-blue-400' > Go To Home</Link>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}