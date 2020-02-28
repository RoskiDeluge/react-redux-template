import axios from "axios";

// If using passport session or other cookie based auth
// export function axiosWithAuth() {
//   return axios.create({
//     withCredentials: true,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

//If using JWT auth
export function axiosWithAuth() {
	//Pick one or implement your own
	// const token = localStorage.getItem("token")
	const token = sessionStorage.getItem("token");

	return axios.create({
		//Use this to set baseURL based on app environment in your .env file
		// baseURL: (function() {
		// 	switch (process.env.REACT_APP_ENV) {
		// 		case "development":
		// 			return process.env.REACT_APP_DEVELOPMENT;
		// 		case "staging":
		// 			return process.env.REACT_APP_STAGING;
		// 		case "production":
		// 			return process.env.REACT_APP_PRODUCTION;
		// 		default:
		// 			return process.env.REACT_APP_DEVELOPMENT;
		// 	}
		// })(),
		headers: {
			"authorization": token,
			"Content-Type": "application/json",
		},
	});
}
