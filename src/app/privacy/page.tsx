import Link from "next/link"
import Image from "next/image"


export default function PrivacyPolicy() {
    return (
        <article>
            <div className="flex justify-center p-1">
                <Link href="/login">
                        <Image
                            src="/hclogo.png"
                            alt="logo"
                            width={290}
                            height={400} 
                        />
                </Link>
            </div>
            <h1 className="text-5xl p-8">Privacy Policy</h1>
            <p className="text-lg p-8">
                We value your privacy and are committed to protecting your personal data.<br />
                We collect and use your data only for the purposes of providing you with our services,
                improving our services, and complying with our legal obligations.<br />
                We store your data securely and only for as long as necessary.<br />
                We do not share your data with third parties without your explicit consent,
                unless required by law.<br />
                This is in accordance with the General Data Protection Regulation (GDPR).
            </p>
        </article>
    )
}