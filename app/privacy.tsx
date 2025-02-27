import { FaLink } from "react-icons/fa6";

export default function Privacy() {
	return (
		<section id="features" className="container py-24">
			<h2 className="mb-16 text-center text-3xl font-bold tracking-tight">
				Privacy by Design
			</h2>
			<p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
				ReWire is designed from the ground up to protect your privacy,
				following the principles of the General Data Protection Regulation
				(<a
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:underline underline-offset-4"
					href="http://gdpr-info.eu/"
				>
					GDPR&nbsp;<FaLink />
				</a>).
				Your personal data, including chat history and AI profile, is never stored in our databases. Instead, it remains encrypted and securely stored on your device.
			</p>
		</section>
	);
}
