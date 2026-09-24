const routes = [
  '/',
  '/projects',
  '/projects/ecommerce-backend',
  '/projects/social-media-backend',
  '/projects/saraha',
  '/about',
  '/contact',
  '/does-not-exist'
];

async function run() {
  const port = process.env.PORT || 4174;
  console.log(`Testing routes against http://localhost:${port} ...\n`);
  let allPassed = true;
  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:${port}` + route);
      const html = await res.text();
      const passed = res.status === 200 && html.includes('id="root"');
      console.log(route.padEnd(35), 'Status:', res.status, passed ? '✓ PASS' : '✗ FAIL');
      if (!passed) allPassed = false;
    } catch (err) {
      console.error(route, 'Error:', err.message);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log('\n✓ ALL ROUTES TESTED AND VERIFIED SUCCESSFULLY!');
  } else {
    process.exit(1);
  }
}

run();
