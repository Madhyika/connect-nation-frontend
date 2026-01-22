/**
 * @param {Array} data
 * @param {string} slug
 * @returns {Object|null}
 */
export function findBySlug(data, slug) {
  if (!Array.isArray(data) || !slug) return null;
  return data.find((item) => item.slug === slug) || null;
}
