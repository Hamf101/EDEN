import Button from './Button';
import crownIcon from '../../assets/crown-icon.png';
import './CourseCard.css';

/**
 * Course card component for displaying a course offering.
 * Designed to be pluggable — onPurchase prop allows future payment integration.
 *
 * @param {object} props
 * @param {string} props.title - Course name
 * @param {string} props.description - Course description
 * @param {string} props.price - Display price (e.g. "$1,500")
 * @param {string} [props.tier] - Tier label (starter, professional, enterprise)
 * @param {boolean} [props.popular] - Show "Most Popular" badge
 * @param {string} [props.image] - Course cover image URL
 * @param {string[]} [props.highlights] - Key selling points
 * @param {function} [props.onPurchase] - Future payment handler
 */
export default function CourseCard({
  title,
  description,
  price,
  tier,
  popular = false,
  image,
  highlights = [],
  onPurchase,
  link,
}) {
  /** Maps tier ID to a human label */
  const tierLabels = {
    starter: 'Starter',
    professional: 'Professional',
    enterprise: 'Enterprise',
  };

  return (
    <div className={`course-card ${popular ? 'course-card--popular' : ''}`}>
      {image && (
        <div className="course-card__image-wrap">
          <img src={image} alt={title} className="course-card__image" />
        </div>
      )}
      {tier && (
        <div className="course-card__tier">
          {tierLabels[tier] || tier}
        </div>
      )}
      <div className="course-card__content">
        <div className="course-card__program-icon">
          <img 
            src={crownIcon} 
            alt="Crown" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '50%',
              transform: 'scale(1.85)'
            }} 
          />
        </div>
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>

        {highlights.length > 0 && (
          <ul className="course-card__highlights">
            {highlights.map((item, i) => (
              <li key={i} className="course-card__highlight">
                <span className="course-card__highlight-dot" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="course-card__footer">
          <span className="course-card__price">{price}</span>
          <Button
            variant="primary"
            size="sm"
            href={link}
            onClick={!link ? onPurchase : undefined}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}
