document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
          const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });


    const form = document.getElementById("registerForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload

    // collect form data
    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      car: form.car.value.trim(),
      city: form.city.value.trim(),
      portfolio: form.portfolio.value,
    };

    // 🔍 Validation
  if (!formData.name) {
    alert("Please enter your name");
    return;
  }

  // simple phone check (10 digits)
  if (!/^\d{10}$/.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  // simple email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!formData.car) {
    alert("Please enter your car name or model");
    return;
  }

  if (!formData.city) {
    alert("Please enter your city");
    return;
  }

  // Optional: portfolio validation
  if (!formData.portfolio) {
    alert("Please select a portfolio option");
    return;
  }

    try {
  const response = await fetch("https://webinar.insuron.in/webinar.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const text = await response.text();
  console.log("Server Response:", text);

  if (text.toLowerCase().includes("already")) {
      alert("This email has already been registered!");
    } else {
      alert("Form submitted successfully!");
      form.reset();
    }
} catch (error) {
  console.error("Error submitting form:", error);
  alert("Something went wrong. Please try again.");
}
  });


  

    




  