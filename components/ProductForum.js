/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { FadeLoader } from 'react-spinners';

export default function ProductForum({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || '');
  const [description, setDescription] = useState(existingDescription || '');
  const [price, setPrice] = useState(existingPrice || '');
  const [category, setCategory] = useState(assignedCategory || '');
  const [productProperties, setProductProperties] = useState(
    assignedProperties || {}
  );
  const [categories, setCategories] = useState([]);
  const [goToProducts, setGoToProducts] = useState(false);
  const [images, setImages] = useState(existingImages || '');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    axios.get('/api/categories').then((result) => {
      setCategories(result.data);
    });
  }, []);

  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
      images,
      category,
      properties: productProperties,
    };

    if (_id) {
      // update product
      await axios.put('/api/products', { ...data, _id });
    } else {
      // create product

      await axios.post('/api/products', data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push('/products');
  }

  async function uploadImages(e) {
    const files = e.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append('file', file);
      }

      const res = await axios.post('/api/upload', data);
      setImages((oldImage) => {
        return [...oldImage, res.data.secure_url];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      let parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  function setProductProperty(propName, value) {
    setProductProperties((prev) => {
      const productProps = { ...prev };
      productProps[propName] = value;
      return productProps;
    });
  }
  return (
    <>
      {categories ? (
        <form onSubmit={saveProduct}>
          <pre>
            {/* {JSON.stringify({ category: categories, cat: category }, null, 4)} */}
          </pre>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Uncategorized</option>
            {categories?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          {/* <pre>{JSON.stringify(propertiesToFill, null, 4)}</pre> */}
          {propertiesToFill.length > 0 &&
            propertiesToFill.map((p, index) => {
              return (
                <div className="" key={index}>
                  <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
                  <select
                    value={productProperties[p.name]}
                    onChange={(e) => setProductProperty(p.name, e.target.value)}
                  >
                    {p.value?.map((v, index) => (
                      <option key={index} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          <label>Photos</label>
          <div className="mb-2 flex flex-wrap gap-2">
            <ReactSortable
              list={images}
              setList={updateImagesOrder}
              className="flex flex-wrap gap-2"
            >
              {!!images?.length &&
                images.map((link) => {
                  return (
                    <div
                      key={link}
                      className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
                    >
                      <img src={link} alt="" className="rounded-sm" />
                    </div>
                  );
                })}
            </ReactSortable>
            {isUploading && (
              <div className="h-32 w-32 bg-white p-1 flex items-center justify-center">
                <FadeLoader color="rgb(30 58 138)" />
              </div>
            )}
            <label className="w-24 h-24 border border-primary text-center cursor-pointer flex flex-col items-center justify-center gap-1 text-primary bg-white shadow-sm rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <div>Add Image</div>
              <input
                type="file"
                accept=".jpg, .png, .jpeg, .webp"
                onChange={uploadImages}
                className="hidden"
              />
            </label>
          </div>
          <label>Description</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
      ) : (
        ''
      )}
    </>
  );
}
