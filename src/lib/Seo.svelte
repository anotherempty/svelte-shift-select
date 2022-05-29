<script>
  import SvelteSeo from "svelte-seo";

  let title = "Svelte Shift Select";
  let description =
    "A Svelte action to mutli-select checkboxes with shift-click";
</script>

<SvelteSeo
  {title}
  {description}
  keywords="svelte, svelte-action, shift, select, multiselect, checkbox"
  openGraph={{
    title: title,
    description: description,
    url: "https://anotherempty.github.io/svelte-shift-select/",
    type: "website",
    images: [
      {
        url: "https://www.example.com/images/og-image.jpg",
        width: 850,
        height: 650,
        alt: "Svelte Shift Select",
      },
    ],
  }}
/>
