import React from "react";
import { hiragana, katakana } from "./kana";

type Props = {
  handleClose: () => void;
};

function Revision({ handleClose }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      <div className="pt-12 text-xl pb-2">
        <table className="border-collapse border-4 border-gray-500">
          <thead>
            <tr>
              <th className="w-1/3 px-1 py-2">Romaji</th>
              <th className="w-1/3 px-1 py-2">Hiragana</th>
              <th className="w-1/3 px-1 py-2">Katakana</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border px-4 py-2">
                {hiragana.map(e => (
                  <li className="list-none" key={e[0]}>
                    {e[1]}
                  </li>
                ))}
              </td>
              <td className="border px-4 py-2">
                {hiragana.map(e => (
                  <li className="list-none" key={e[0]}>
                    {e[0]}
                  </li>
                ))}
              </td>
              <td className="border px-4 py-2">
                {katakana.map(e => (
                  <li className="list-none" key={e[0]}>
                    {e[0]}
                  </li>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Revision;
