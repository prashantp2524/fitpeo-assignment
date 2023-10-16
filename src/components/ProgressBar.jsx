import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () =>
{
    const percentage = 65;
    return (
        <>
            {/* <div className=' shadow-md w-72 flex items-center justify-center p-6'> */}

            <div className=' shadow-xl rounded-[50%] p-8 ' style={{ width: 250, height: 250 }} >

                <CircularProgressbar maxValue={100} strokeWidth={9} value={percentage} text={`${percentage}%
                `} styles={{
                        // background: {
                        //     fill: '#fc03db',
                        // },

                        // trail: {
                        //     // stroke: '#fc03db',
                        //     strokeLinecap: 'butt'
                        // }

                        path: {
                            // stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                            stroke: `rgba(114, 20, 163, ${percentage / 100})`


                        },

                        text: {
                            fontSize: '18px',

                        }
                    }} />
            </div>
            {/* </div> */}
        </>
    )
}

export default ProgressBar