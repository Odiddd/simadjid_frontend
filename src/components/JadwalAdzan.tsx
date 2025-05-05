import React from "react";
// import { Card } from '@/components/ui/card';

const JadwalAdzan = () => {
    return (  
<section className="p-8 text-center">
        <h3 className="text-xl font-bold mb-4">MASJID ABOGOBOGA</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2 text-yellow-500">JADWAL ADZAN</th>
                <th className="text-yellow-500">Waktu</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Subuh', '04.15'],
                ['Zuhur', '11.30'],
                ['Ashar', '15.10'],
                ['Maghrib', '17.45'],
                ['Isya', '18.55'],
              ].map(([nama, waktu], i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{nama}</td>
                  <td>{waktu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

);
};

export default JadwalAdzan;
