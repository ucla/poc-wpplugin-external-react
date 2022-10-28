<?php /* Template Name: Custom Template, No Sidebar */

global $id;
global $ucla_wcl_plugin_dir;

$template_parts_dir =  $ucla_wcl_plugin_dir . '/src/templates/template_parts/';

$thumb_id = get_post_thumbnail_id($id);

if ('' != $thumb_id) {
  $thumb_url  = wp_get_attachment_image_src($thumb_id, 'full', true);
  $image      = $thumb_url[0];
}

?>

<?php include_once $template_parts_dir . 'header.php'; ?>

<main id="main" class="main custom-template">

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


        <?php include 'templates/custom-template-header.php'; ?>



        <div class="ucla campus entry-content">

          <div class="col span_12_of_12">
            <?php the_content(); ?>

          </div>

        </div>

      </article>

  <?php endwhile;
  endif; ?>
</main>

<?php include_once $template_parts_dir . 'footer.php'; ?>