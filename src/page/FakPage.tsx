import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Fa from '../types/Fa';
import apiClient from '../utils/apiClient';
import FaRow from '../components/FaRow';

const FakPage: React.FC = () => {
    const [fak, setFak] = useState<Fa[]>([]);

    useEffect(() => {
        apiClient
            .get('/termekek')
            .then((response) => {
                setFak(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="p-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="col-2">Név</th>
                        <th className="col-3 text-justify">Leírás</th>
                        <th className="col-2">Készlet</th>
                        <th className="col-2">Ár</th>
                        <th className="col-2">Kategória</th>
                        <th className="col-1">Kép</th>
                    </tr>
                </thead>
                {fak.map((fa) => (
                    <FaRow key={fa.id} fa={fa} />
                ))}
            </Table>
        </div>
    );
};

export default FakPage;
