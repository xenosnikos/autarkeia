<script>
	import SolutionCard from '$lib/components/ui/SolutionCard.svelte';
	
	const solutions = [
		{
			title: 'Waste Management',
			description: 'Smart collection, sorting, and processing systems that optimize waste handling and reduce environmental impact.',
			iconPath: 'M14 14h-4v-4h4m6 2a8 8 0 1 1-16 0 8 8 0 0 1 16 0z'
		},
		{
			title: 'Waste to Energy',
			description: 'Converting organic waste into clean energy through advanced biofuel technology and thermal conversion processes.',
			iconPath: 'M12 3l5 3 5-3v12l-5 3-5-3-5 3-5-3V3l5 3 5-3z'
		},
		{
			title: 'Solar Energy',
			description: 'Next-generation solar power systems with AI optimization for maximum efficiency in variable conditions.',
			iconPath: 'M12 7l-8 5v10h16V12l-8-5z M3 5a9 9 0 0 1 18 0'
		},
		{
			title: 'Energy Storage',
			description: 'Advanced battery technologies and management systems to store and distribute energy when needed most.',
			iconPath: 'M12 20c7-4 7-8 0-12-7 4-7 8 0 12z'
		},
		{
			title: 'Water Desalination',
			description: 'Energy-efficient desalination solutions powered by our renewable energy systems for sustainable freshwater production.',
			iconPath: 'M12 20v-8M7 12h10M7.2 7.4c2.6-2.6 6.8-2.6 9.6 0'
		},
		{
			title: 'Integrated Analytics',
			description: 'Comprehensive AI monitoring and analytics to optimize resource usage across all systems in real-time.',
			iconPath: 'M20 16v-6h-4v-4h-6V2h-6v6H2v6h6v6h6v-6h6z'
		}
	];
</script>

<section class="solutions">
	<div class="container">
		<div class="section-header">
			<h2>Intelligent Solutions for a Sustainable Future</h2>
			<p>Our AI-powered platform integrates multiple resource management systems into one unified ecosystem.</p>
		</div>
		<div class="solutions-grid">
			{#each solutions as solution}
				<SolutionCard 
					title={solution.title} 
					description={solution.description}
					iconPath={solution.iconPath}
				/>
			{/each}
		</div>
	</div>
</section>