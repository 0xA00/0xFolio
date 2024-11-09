<script>
	export let name;
	export let githublink;
	export let lang;

	//please add a space after the , in the lang attribute
	//it's just it's disgusting to see the comma stick to the language name
	//I'm sorry, I'm a perfectionist
	//lang is an array of languages

	let formattedLang = lang.join(', ');
	//add a Caps to the first letter of each language
	formattedLang = formattedLang.replace(/\b\w/g, (l) => l.toUpperCase());
</script>

<div class="project">
	<div class="border">
		<a href={githublink} target="_blank" class="slug">
			<div class="upPart">
				<div class="wrapper">
					<div class="background">
						<h2>{name}</h2>
					</div>
				</div>

				<span class="link">{githublink.replace('https://github.com/', '')}</span>
			</div>
			<div class="descPart">
				<slot />
			</div>

			{#if lang}
				<div class="langPart">
					<span>{formattedLang}</span>
				</div>
			{/if}
		</a>
	</div>
</div>

<style>
	.slug {
		text-decoration: none;
		color: white;
		transition: color 0.5s;
	}

	.upPart {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;
		height: fit-content;

		& h2 {
			margin-bottom: 0;
			margin-top: 0;
			position: relative;
			width: fit-content;

			color: var(--primary-color);
			mix-blend-mode: difference;
			word-break: keep-all;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}



		& .link {
		
			text-decoration: none;
			margin-bottom: 5px;
			display: flex;
			flex-direction: row;
		}
	}

	.langPart {
		display: flex;
		justify-content: flex-end;
		font-weight: 800;
		font-size: 1rem;
		margin-top: 1rem;
	}

	.project {
		display: flex;
		flex-direction: column;
		background-color: var(--background-color);
		color: white;
		padding: 20px;
		overflow: hidden;
	}

	.descPart {
		text-align: start;
		font-weight: 400;
		font-size: 1rem;
		padding-bottom: 1rem;
		color:lightgray;
	}

	.project:not(:last-child)::after {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: var(--primary-color);
		opacity: 0.7;
		margin-top: 1rem;
	}

	.link {
		word-break: normal;
	}

	.border {
		border-left: 5px solid rgb(from var(--primary-color) r g b / 0.3);
		padding-left: 10px;
		transition: border-left 0.5s;
		
	}

	.border:hover {
		border-left: 5px solid var(--primary-color);
	}

	.border .background{
		background-color: var(--primary-color);
		width: 0%;
		transition: width 0.5s ease;

		
	}

	.border:hover .background{
		width: 100%;
	}


.wrapper{
	width:fit-content;
	
}

</style>
