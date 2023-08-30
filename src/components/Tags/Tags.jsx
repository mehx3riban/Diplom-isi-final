import React, { useEffect } from 'react';
import './Tags.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getTags } from '../../Redux/tagSlice';
import { setSelectedTag } from '../../Redux/productsSlice';

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const uniqueTags = Array.from(new Set(tags.map(tag => tag.tag)));

  const handleTagClick = (tag) => {
    dispatch(setSelectedTag(tag));
  };

  return (
    <div className="product-tags pt-4 ps-lg-4">
      <h2 className="product-tags__title mb-2">categories</h2>
      {uniqueTags.map((tag, i) => (
        <div key={i}>
          <span onClick={() => handleTagClick(tag)} className="tagname">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
