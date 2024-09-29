import { useState } from 'react';
import { ExtraGalleryImages } from './ExtraGalleryImages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ExtraSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const length = ExtraGalleryImages.length;

  const handleOpenModal = (index: number) => {
    setSlideIndex(index);
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  const handleNextImg = () => {
    slideIndex === length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const handlePrevImg = () => {
    slideIndex === 0
      ? setSlideIndex(length - 1)
      : setSlideIndex(slideIndex - 1);
  };

  openModal
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  return (
    <>
      {openModal && (
        <div className="modal">
          <div className="modal-icons">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close-btn"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="left-btn"
              onClick={handlePrevImg}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="right-btn"
              onClick={handleNextImg}
            />
          </div>

          <div className="full-img">
            <img
              src={ExtraGalleryImages[slideIndex].src}
              alt={ExtraGalleryImages[slideIndex].text}
            />
          </div>
          <div className="modal-overlay"></div>
        </div>
      )}
      <div className="image-slider">
        {ExtraGalleryImages.map((image, index) => {
          return (
            <div
              key={index}
              className="slide-img"
              onClick={() => handleOpenModal(index)}
            >
              <img src={image.src} alt={image.text} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExtraSlider;
