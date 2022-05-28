<script>
	import shiftSelect from '$lib';
</script>

{#each { length: 10 } as file, i}
	<label>
		<input type="checkbox" name="files" use:shiftSelect />
		{i}
	</label>
{/each}
