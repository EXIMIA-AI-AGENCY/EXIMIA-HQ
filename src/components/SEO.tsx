import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title,
    description,
    keywords = "Eximia, Tecnología, IA, Inteligencia Artificial, Innovación, Transformación Digital, Puerto Rico",
    image = "/og-image.png", // Ensure this image exists in public folder or update path
    url = "https://www.eximiahq.com",
    type = "website"
}: SEOProps) {
    const siteTitle = "EXIMIA | Innovación Sin Límites";
    const fullTitle = title === siteTitle ? title : `${title} | EXIMIA`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
