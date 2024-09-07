import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const usePreviousRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousPathRef = useRef(null);

  useEffect(() => {
    previousPathRef.current = location.pathname;
    // console.log("🚀 ~ useEffect ~ previousPathRef.current:", previousPathRef.current)
  }, [location]);

  const goBack = () => {
    if (previousPathRef.current) {
      toast("Quay lại trang trước !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate(previousPathRef.current);
    }
  };

  return { previousPath: previousPathRef.current, goBack };
};

export default usePreviousRoute;
