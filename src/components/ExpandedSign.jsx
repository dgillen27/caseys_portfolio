import React from 'react';

const ExpandedSign = (props) => {
  const { images } = props
  return (
    <div className="content" id="expanded-sign">
      { images[0] && <img src={images[0]} alt="" />}
      { images[1] && <img src={images[1]} alt="" />}
      { images[2] && <img src={images[2]} alt="" />}
      { images[3] && <img src={images[3]} alt="" />}
      { images[4] && <img src={images[4]} alt="" />}
      { images[5] && <img src={images[5]} alt="" />}
      { images[6] && <img src={images[6]} alt="" />}
      { images[7] && <img src={images[7]} alt="" />}
      { images[8] && <img src={images[8]} alt="" />}
      { images[9] && <img src={images[9]} alt="" />}
      { images[10] && <img src={images[10]} alt="" />}
      { images[11] && <img src={images[11]} alt="" />}
      { images[12] && <img src={images[12]} alt="" />}
    </div>
  )
}

export default ExpandedSign;
