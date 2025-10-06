<svelte:head>
	<title>Contact Us - Autarkia</title>
	<meta name="description" content="Get in touch with our team to learn more about our solutions and how we can help you achieve sustainable resource management." />
</svelte:head>

<section class="contact-hero">
	<div class="container">
		<h1>Contact Us</h1>
		<p>Get in touch with our team to learn more about our solutions and how we can help you achieve sustainable resource management.</p>
	</div>
</section>

<section class="contact-info">
	<div class="container">
		<div class="contact-grid">
			<div class="contact-card">
				<h3>General Inquiries</h3>
				<p>info@autarkia.com</p>
				<p>+1 (555) 123-4567</p>
			</div>
			<div class="contact-card">
				<h3>Business Hours</h3>
				<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
				<p>Saturday - Sunday: Closed</p>
			</div>
			<div class="contact-card">
				<h3>Office Location</h3>
				<p>123 Innovation Drive</p>
				<p>San Francisco, CA 94107</p>
			</div>
		</div>
	</div>
</section>

<section class="contact-form">
	<div class="container">
		<h2>Send us a Message</h2>
		<form>
			<div class="form-grid">
				<div class="form-group">
					<label for="name">Full Name</label>
					<input type="text" id="name" name="name" required>
				</div>
				<div class="form-group">
					<label for="email">Email Address</label>
					<input type="email" id="email" name="email" required>
				</div>
				<div class="form-group">
					<label for="company">Company</label>
					<input type="text" id="company" name="company">
				</div>
				<div class="form-group">
					<label for="phone">Phone Number</label>
					<input type="tel" id="phone" name="phone">
				</div>
				<div class="form-group full-width">
					<label for="subject">Subject</label>
					<input type="text" id="subject" name="subject" required>
				</div>
				<div class="form-group full-width">
					<label for="message">Message</label>
					<textarea id="message" name="message" rows="5" required></textarea>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">Send Message</button>
		</form>
	</div>
</section>

<section class="contact-map">
	<div class="container">
		<div class="map-container">
			<div class="map-placeholder">
				<h3>Our Location</h3>
				<p>123 Innovation Drive, San Francisco, CA 94107</p>
			</div>
		</div>
	</div>
</section>
