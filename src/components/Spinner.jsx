import React, {useState} from 'react';
import { PulseLoader } from 'react-spinners';
 
const Spinner = () => {
  const [loading, setLoading] = useState(true)

    return (
      <div className='SyncLoader'>
        <PulseLoader
              sizeUnit={'px'}
              size={10}
              color={'#ABC7C2'}
              loading={true}
            />
      </div> 
    )
  
}

export default Spinner