import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import TokenContext from '../../contect/context';

function Viewlist() { 
    const { medid } = useParams();
    const [name, setMedicine] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();
 

    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${medid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setMedicine(response.data.name);
            setCompany(response.data.company);
            setExpiry_date(response.data.expiry_date);
        }).catch(error => {
            console.error('Error fetching medicine data:', error);
        });
    }, [medid, token]);




    return (
        <div>
             <div className="container">
                <div className='viewmed'>
            <div className="card card-view card-box">
                <div className="card-body">
                    <h5 className="card-title">View Medicine</h5>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} id="exampleInputName" onChange={(e) => setMedicine(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputCompany" className="form-label">Company</label>
                            <input type="text" className="form-control" value={company} id="exampleInputCompany" onChange={(e) => setCompany(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputDate" className="form-label">Expiry Date</label>
                            <input type="date" className="form-control" value={expiry_date} id="exampleInputDate" onChange={(e) => setExpiry_date(e.target.value)} />
                        </div>
                        <div className='button'>
                        <Link to ={'/list'}>
                    <button type="submit" className="btn btn-secondary" >Back</button>
                    </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Viewlist;
