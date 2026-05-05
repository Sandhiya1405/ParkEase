import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const db = getFirestore();

async function createUser(userId, email, name, mobile, licenseNo, vehicleNo) {
  try {
    const userDocRef = doc(db, "Users", userId);
    await setDoc(userDocRef, {
      email: email,
      name: name,
      mobile: mobile,
      licenseNo: licenseNo,
      vehicleNo: vehicleNo,
    });
    console.log("User created successfully!");
  } 
  catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
