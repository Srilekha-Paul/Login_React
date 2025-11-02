// import React, { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
// import { FormData } from "../types/auth.types";
// import { authService } from "../services/authService";
// import { validateEmail, validatePassword, validateConfirmPassword } from "../utils/validation";


// const AuthPage: React.FC = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleSubmit = async () => {
//     // Clear previous errors
//     setErrors({});

//     // Validate form
//     const newErrors: Partial<FormData> = {};

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!validatePassword(formData.password)) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (!isLogin) {
//       if (!formData.name || formData.name.trim().length < 2) {
//         newErrors.name = "Name must be at least 2 characters";
//       }

//       if (
//         !validateConfirmPassword(
//           formData.password,
//           formData.confirmPassword || ""
//         )
//       ) {
//         newErrors.confirmPassword = "Passwords do not match";
//       }
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsLoading(true);

//     try {
//       let response;
//       if (isLogin) {
//         response = await authService.login(formData);
//       } else {
//         response = await authService.register(formData);
//       }

//       console.log("Authentication successful:", response);
//       alert(
//         `${isLogin ? "Login" : "Registration"} successful! Check console for data.`
//       );

//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error("Authentication error:", error);
//       alert(
//         `${isLogin ? "Login" : "Registration"} failed. Please try again.`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error for this field when user starts typing
//     if (errors[name as keyof FormData]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: undefined,
//       }));
//     }
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setErrors({});
//     setShowPassword(false);
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
//             <h2 className="text-3xl font-bold text-center">
//               {isLogin ? "Welcome Back" : "Create Account"}
//             </h2>
//             <p className="text-center mt-2 text-blue-100">
//               {isLogin ? "Sign in to continue" : "Sign up to get started"}
//             </p>
//           </div>

//           {/* Form */}
//           <div className="p-8">
//             <div className="space-y-6">
//               {/* Name field - only for register */}
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className={`w-full pl-10 pr-4 py-3 border ${
//                         errors.name ? "border-red-500" : "border-gray-300"
//                       } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   {errors.name && (
//                     <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                   )}
//                 </div>
//               )}

//               {/* Email field */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     onKeyPress={handleKeyPress}
//                     className={`w-full pl-10 pr-4 py-3 border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
//                     placeholder="you@example.com"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {/* Password field */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     onKeyPress={handleKeyPress}
//                     className={`w-full pl-10 pr-12 py-3 border ${
//                       errors.password ? "border-red-500" : "border-gray-300"
//                     } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.password}
//                   </p>
//                 )}
//               </div>

//               {/* Confirm Password - only for register */}
//               {!isLogin && (
//                 <div className="space-y-2">
//                   <label
//                     htmlFor="confirmPassword"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Confirm Password
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       onKeyPress={handleKeyPress}
//                       className={`w-full pl-10 pr-4 py-3 border ${
//                         errors.confirmPassword
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
//                       placeholder="••••••••"
//                     />
//                   </div>
//                   {errors.confirmPassword && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.confirmPassword}
//                     </p>
//                   )}
//                 </div>
//               )}

//               {/* Forgot Password - only for login */}
//               {isLogin && (
//                 <div className="flex items-center justify-between">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     />
//                     <span className="ml-2 text-sm text-gray-600">
//                       Remember me
//                     </span>
//                   </label>
//                   <button
//                     type="button"
//                     className="text-sm text-blue-600 hover:text-blue-700 font-medium"
//                     onClick={() => alert("Forgot password functionality")}
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl ${
//                   isLoading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoading
//                   ? "Processing..."
//                   : isLogin
//                   ? "Sign In"
//                   : "Create Account"}
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="mt-6 flex items-center">
//               <div className="flex-1 border-t border-gray-300"></div>
//               <span className="px-4 text-sm text-gray-500">or</span>
//               <div className="flex-1 border-t border-gray-300"></div>
//             </div>

//             {/* Social Login */}
//             <div className="mt-6 space-y-3">
//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
//                 onClick={() => alert("Google login functionality")}
//               >
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 <span className="font-medium text-gray-700">
//                   Continue with Google
//                 </span>
//               </button>
//             </div>

//             {/* Toggle Login/Register */}
//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 {isLogin
//                   ? "Don't have an account?"
//                   : "Already have an account?"}
//                 <button
//                   type="button"
//                   onClick={toggleForm}
//                   className="ml-2 text-blue-600 hover:text-blue-700 font-semibold"
//                 >
//                   {isLogin ? "Sign up" : "Sign in"}
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;
