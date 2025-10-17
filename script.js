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

    try {
      const response = await fetch("https://insuron.in/webinar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      alert("Form submitted successfully!");
      console.log("Server Response:", result);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  });

    




  