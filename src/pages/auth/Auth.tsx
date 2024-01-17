import { Button } from "@/components/ui/button";
import { mutationLogin } from "./mutation";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await mutate();
      localStorage.setItem("guest_session_id", data.guest_session_id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full min-h-[80vh]">
      <div className="text-2xl font-bold border border-solid rounded-xl p-20">
        <div>
          <h1>Welcome! Login by registering as </h1>
          <h1>Guest Below</h1>
        </div>
        <form onSubmit={handleLogin}>
          <Button className="mt-4 p-4 w-full" variant="secondary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
