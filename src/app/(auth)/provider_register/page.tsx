"use client";
import { useState, FormEvent } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { button_style } from "../../utils/Styling";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/register/provider`,
      {
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
          title: title,
          phone: phone,
          address: address,
          username: username,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (res.status === 200) {
      router.push("/provider_login");
    } else {
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Full Name"
          />
          <select
            onChange={(e) => setTitle(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
          >
            <option value="" disabled>
              Select Proffestion
            </option>
            <option value="District nurse">District nurse</option>
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Curator">Curator</option>
            <option value="Doctor">
              Doctor - specialist in general medicine
            </option>
            <option value="Midwife">Midwife</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Curator">Curator</option>
            <option value="BVC nurse">BVC nurse</option>
            <option value="Occupational therapist">
              Occupational therapist
            </option>
          </select>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Address"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Phone"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={button_style}
            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </Button>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/provider_login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
