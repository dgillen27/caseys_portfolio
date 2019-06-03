import React from 'react';
import { Link } from 'react-router-dom'

const Signs = () => {
  return (
    <div className="content" id="illustrations">
      <p id="sign-description">Signs are all handpainted with love, click on picture for details!</p>
      <Link to="/animal-crackers"><img src="https://i.imgur.com/Dnt2cdP.jpg" alt="ac" /></Link>
      <Link to="/gift"><img src="https://i.imgur.com/qJRRZgH.jpg" alt="gift" /></Link>
      <Link id="full-img" to="/ode"><img src="https://i.imgur.com/qCiQdkA.jpg" alt="ode" /></Link>
      <Link id="full-img" to="/sunny"><img src="https://i.imgur.com/6bTQpJi.jpg" alt="sunny" /></Link>
      <Link to="/candy"><img src="https://i.imgur.com/b2hE5VX.jpg" alt="candy" /></Link>
      <Link to="/pancake"><img src="https://i.imgur.com/FPv297C.jpg" alt="pancake" /></Link>
      <Link id="full-img" to="/joe"><img src="https://i.imgur.com/zaZ0457.jpg" alt="joe" /></Link>
      <Link id="full-img" to="/trek"><img src="https://i.imgur.com/9bnRvLy.jpg" alt="trek" /></Link>
      <Link to="/green"><img src="https://i.imgur.com/3xTylG3.jpg" alt="" /></Link>
      <Link to="/bread"><img src="https://i.imgur.com/fxZZ6xN.jpg" alt="" /></Link>
      <Link id="full-img" to="/beans"><img src="https://i.imgur.com/yVAFqSD.jpg" alt="" /></Link>
      <div className="tri-grid">
        <Link to="/dino"><img src="https://i.imgur.com/tfhEvtF.jpg" alt="" /></Link>
        <Link to="/easter"><img src="https://i.imgur.com/amRNls5.jpg" alt="" /></Link>
        <img src="https://i.imgur.com/kF26CS6.jpg" alt="" />
        <Link to="/greeting"><img src="https://i.imgur.com/1RusdfR.jpg" alt="" /></Link>
        <Link to="/apple"><img src="https://i.imgur.com/lmcEC88.jpg" alt="" /></Link>
        <Link to="/creamy"><img src="https://i.imgur.com/iNhU30h.jpg" alt="" /></Link>
      </div>
      <Link id="full-img" to="/waffle"><img src="https://i.imgur.com/cmNDqra.jpg" alt="" /></Link>
      <Link to="/kick"><img src="https://i.imgur.com/R8Dh01b.jpg" alt="" /></Link>
      <Link to="/maple"><img src="https://i.imgur.com/0P5huCG.jpg" alt="" /></Link>
      <Link to="/tikka"><img src="https://i.imgur.com/bGA3EUa.jpg" alt="" /></Link>
      <Link to="/mac"><img src="https://i.imgur.com/MXNEFRd.jpg" alt="" /></Link>
      <img src="https://i.imgur.com/bIiWrQe.jpg" alt="" />
      <img src="https://i.imgur.com/jFuvcaM.jpg" alt="" />
      <div className="tri-grid">
        <Link to="/skully"><img src="https://i.imgur.com/dY86ozd.jpg" alt="" /></Link>
        <Link to="/blueberry"><img src="https://i.imgur.com/XelKPXk.jpg" alt="" /></Link>
        <Link to="/sauce"><img src="https://i.imgur.com/BfXMzpu.jpg" alt="" /></Link>
      </div>
      <Link to="/pepita"><img src="https://i.imgur.com/hYzQYCn.jpg" alt="" /></Link>
      <Link to="/porta"><img src="https://i.imgur.com/yXIbJWv.jpg" alt="" /></Link>
      <Link id="full-img" to="/soup"><img src="https://i.imgur.com/by4wA5O.jpg" alt="" /></Link>
    </div>
  )
}

export default Signs;
