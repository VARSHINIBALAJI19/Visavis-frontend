import React from 'react';
import './Physician.css';
import { useState } from 'react';
import Exportimg from '../src/images/export.png';






function Physician() {


    const [isExportClicked, setIsExportClicked] = useState(false);






    return (
        <div className='form-container'>

            <div className='left'>
                <div className='text2'>
                    Facility
                    <select className="dropdown" id="dropdown">
                        <option value="">Linden Center for Nursing and Rehabilitation</option>
                        {/* Add facility options here */}
                    </select>
                </div>

                <div className='date-container'>
                    <div className='text1'>
                        Date
                    </div>
                    <input className='date'
                        type='date'

                    />
                </div>

            </div>

            <div>
                <button className='export-button' onClick={() => setIsExportClicked(true)}>
                    <img className="img" src={Exportimg} alt="export" /><div className='Export'>Export</div>
                </button>
                {isExportClicked && (
                    <div>
                        <option value="">PDF</option>
                        <option value="">CSV.File</option>
                    </div>
                )}


            </div>


            <div className='save'>
                <button className="save-button" type="submit" >Save</button>
            </div>

        </div >




    );
}




export default Physician;