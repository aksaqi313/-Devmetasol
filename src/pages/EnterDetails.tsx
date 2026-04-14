import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnterDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to schedule-call page
    navigate("/schedule-call", { replace: true });
  }, [navigate]);

  return null;
};

export default EnterDetails;
