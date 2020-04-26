import React from "react";
import { hiragana, katakana } from "./kana";

function Revision() {
  return (
    <div className="flex justify-center flex-wrap p-2 text-xl ">
      <table className="border-collapse border-2 border-gray-500">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Hiragana</th>
            <th className="w-1/2 px-4 py-2">Katakana</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="border px-4 py-2">
              {hiragana.map(e => (
                <li className="list-none" key={e[0]}>
                  {e[0]} : {e[1]}
                </li>
              ))}
            </td>
            <td className="border px-4 py-2">
              {katakana.map(e => (
                <li className="list-none" key={e[0]}>
                  {e[0]} : {e[1]}
                </li>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Revision;
