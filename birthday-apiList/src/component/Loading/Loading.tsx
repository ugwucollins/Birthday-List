import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div>
        <ReactLoading type={'bars'} 
        color={'rgb(253, 132, 26)'} height={50} width={70} />
        {/* <ReactLoading type={'bars'} color={'sandybrown'} height={50} width={50} /> */}
    </div>
  )
}

export default Loading;