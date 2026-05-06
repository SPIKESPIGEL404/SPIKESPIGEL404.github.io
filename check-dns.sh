#!/bin/bash

echo "🔍 Checking DNS configuration for kelsenliu.com..."
echo "================================================"
echo ""

# Check A records
echo "📍 A Records (should show 4 GitHub IPs):"
dig kelsenliu.com A +short
echo ""

# Expected IPs
echo "✅ Expected GitHub Pages IPs:"
echo "   185.199.108.153"
echo "   185.199.109.153"
echo "   185.199.110.153"
echo "   185.199.111.153"
echo ""

# Check CNAME for www
echo "🔗 WWW CNAME Record:"
dig www.kelsenliu.com CNAME +short
echo ""
echo "✅ Expected: SPIKESPIGEL404.github.io."
echo ""

# Check if site is accessible
echo "🌐 Testing site availability:"
response=$(curl -s -o /dev/null -w "%{http_code}" -L http://kelsenliu.com)
if [ "$response" = "200" ]; then
    echo "   ✅ Site is accessible (HTTP $response)"
else
    echo "   ⏳ Site not yet accessible (HTTP $response) - DNS may still be propagating"
fi
echo ""

# Check HTTPS
echo "🔒 HTTPS Status:"
https_response=$(curl -s -o /dev/null -w "%{http_code}" -L https://kelsenliu.com 2>/dev/null)
if [ "$https_response" = "200" ]; then
    echo "   ✅ HTTPS is working"
else
    echo "   ⏳ HTTPS certificate pending (can take up to 24 hours)"
fi
echo ""

echo "================================================"
echo "💡 DNS propagation typically takes 5-30 minutes"
echo "   Run this script again in a few minutes to check status"