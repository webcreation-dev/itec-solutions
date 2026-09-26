"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useIsDarkRoute } from "@/hooks";
import toast from "react-hot-toast";

const Forgot = () => {
   const isDark = useIsDarkRoute();
   const [email, setEmail] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
         toast.error("Please enter your email");
         return;
      }
      toast.success(`Password reset request sent to ${email}!`);
      setEmail("");
   };

   return (
      <div className="tp-login-area pt-200 pb-140 pre-header p-relative z-index-1 fix">
         <div className="container containers">
            <div className="row justify-content-center">
               <div className="col-xl-5 col-lg-8">
                  <div className="tp-login-wrapper">
                     <div className="tp-login-top text-center mb-30">
                        <h3 className="tp-login-title">Forgot Password?</h3>
                        <p>Enter your email address to request password reset.</p>
                     </div>
                     <div className="tp-login-option">
                        <form onSubmit={handleSubmit}>
                           <div className="tp-login-input-wrapper">
                              <div className="tp-login-input-box">
                                 <div className="tp-login-input-title">
                                    <label htmlFor="email">Your Email</label>
                                 </div>
                                 <div className="tp-login-input">
                                    <input
                                       id="email"
                                       type="email"
                                       placeholder="aleric@mail.com"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="tp-login-bottom">
                              <button type="submit" className="tp-login-btn w-100">Send Request</button>
                           </div>
                        </form>
                        <div className="tp-login-top text-center mt-30">
                           <p className="mb-0">
                              Remember your password?{" "}
                              <span>
                                 <Link href={isDark ? "/dark/login" : "/login"}>Login</Link>
                              </span>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Forgot;