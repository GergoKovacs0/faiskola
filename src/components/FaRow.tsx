import React from 'react';
import Fa from '../types/Fa';

interface FaRowProps {
    fa: Fa;
}

const FaRow: React.FC<FaRowProps> = ({ fa }) => {
    return (
        <tr>
            <td className="col-2">{fa.nev}</td>
            <td className="col-3 text-justify">{fa.leiras}</td>
            <td className="col-2">{fa.keszlet}db</td>
            <td className="col-2">{fa.ar}Ft</td>
            <td className="col-2">{fa.kategoria.nev}</td>
            <td className="col-1">
                <img
                    src={`http://localhost:8020/api/kepek/${fa.kepUrl}`}
                    alt={fa.nev}
                    className="img-fluid"
                />
            </td>
        </tr>
    );
};

export default FaRow;
