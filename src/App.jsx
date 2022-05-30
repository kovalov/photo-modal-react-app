import { useState } from 'react';
import { responseAdapter } from './utils/utils';
import useFetch from './hooks/useFetch';
import MyHeader from './components/UI/header/MyHeader';
import Gallery from './components/Gallery';
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useFetch(
    'https://picsum.photos/v2/list?limit=5',
    responseAdapter
  );

  const [imageIndex, setImageIndex] = useState(null);

  const [isVisible, setVisible] = useState(false);

  return (
    <div className=''>
      <MyHeader title='Gallery App' />
      <Gallery
        images={images}
        setImageIndex={setImageIndex}
        openModal={setVisible}
      />
      <Modal
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        isVisible={isVisible}
        setVisible={setVisible}
      />
    </div>
  );
}

export default App;
