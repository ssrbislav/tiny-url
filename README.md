# tiny-url
This is a simple implementation of URL shortening application


Test question answers

1. URL (Uniform Resource Locator) shortening system, quite simply, makes
URLs significantly shorter, and redirects users to the original URLs
when they access the short URLs.

2. Making URLs shorter has many advantages. One of those is usage in
situations where the user has character number limits (for instance,
SMS or Twitter), in case there is a need for memorizing the URL (such as it being
printed on paper) or for more memory-efficient storage in databases by
third-party applications.

3. The application consists of a server layer, a client layer and a
database. Server layer handles the actual work of shortening,
redirecting and communicating with the database and the client layer.
The database holds the records of shortened URLs, long (original) URLs,
code and date of creation. Users access the client layer, which allows
them to either shorten an URL, or to redirect them to the original URL
from the shortened one.

4. There are numerous challenges in building an URL shortening system.
Some of those are disallowing abuse by malicious parties, making sure
that the codes are unique, and making the system scalable, safe and
reliable.

5. The system can be expanded with a couple of advanced features,
including allowing users to define their own codes. One other advanced
feature might be restricting access of some domains to select users, in
case the system is being used for shortening URLs that contain sensitive
information or is purely being used by a third-party application.
Another advanced feature is analytics.
