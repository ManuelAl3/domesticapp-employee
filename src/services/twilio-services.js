import apiFetch from "./api-fetch";

export async function startVerification(newCuponUser) {
  return await apiFetch('api/verification/start', { body: newCuponUser });
}

/* startVerification({via: "sms", phone: "+528994466683"}).then((data) => {
      console.log("Verification started: ", data);
    }).catch((data) => {console.error("Phone verification error: ", data);})*/