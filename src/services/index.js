import "dotenv/config";

export const register_user = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/api/Auth/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = res.json();
    return data;
  } catch (error) {
    console.log("Error in register_user (service) => ", error);
    return error.message;
  }
};

export const login_user = async (formData) => {
  try {
    if (
      formData.email === process.env.NEXT_PUBLIC_EMAIL &&
      formData.password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      return {
        success: true,
        message: "Login successfully",
        token: Math.random().toString().slice(2),
      };
    } else {
      return {
        message: "Wrong credential",
      };
    }
  } catch (error) {
    console.log("Error in login_user (service) => ", error);
    return error.message;
  }
};
