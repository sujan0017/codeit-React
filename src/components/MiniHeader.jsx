import { Link } from "react-router-dom";
import miniMenuLeft from "../constants/miniMenuLeft";
import miniMenuRight from "../constants/miniMenuRight";

function MiniHeader() {
  return (
    <div className="flex justify-evenly items-center bg-slate-200 py-2">
      <div className="flex justify-center items-center gap-3">
      {
        miniMenuLeft.map((menu)=>{
           return (<Link className="text-xs" key={menu.id} to={menu.route}>{menu.label}</Link>)
        })
      }
      </div>
      <div className="flex justify-center items-center gap-3">
      {
        miniMenuRight.map((menu)=>{
           return (<Link className="text-xs" key={menu.id} to={menu.route}>{menu.label}</Link>)
        })
      }
      </div>
    </div>
  );
}

export default MiniHeader;
