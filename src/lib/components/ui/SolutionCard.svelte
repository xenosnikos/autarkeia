<script>
	export let title;
	export let description;
	export let iconPath;
</script>

<div class="solution-card">
	<div class="solution-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d={iconPath}></path>
		</svg>
	</div>
	<h3>{title}</h3>
	<p>{description}</p>
</div>